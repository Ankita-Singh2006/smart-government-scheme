import { Scheme, UserEligibilityProfile, SchemeMatchResult, MatchReason } from '../types/scheme';

export function calculateSchemeMatch(
  scheme: Scheme,
  profile: UserEligibilityProfile
): SchemeMatchResult {
  const criteria = scheme.eligibilityCriteria;
  const reasons: MatchReason[] = [];

  // 1. Age Match (Max 20 Points)
  let agePoints = 0;
  if (profile.age) {
    const minAge = criteria.minAge ?? 0;
    const maxAge = criteria.maxAge ?? 120;
    if (profile.age >= minAge && profile.age <= maxAge) {
      agePoints = 20;
      reasons.push({
        criterion: 'Age Criteria',
        matched: true,
        pointsEarned: 20,
        maxPoints: 20,
        explanation: {
          en: `Your age (${profile.age} yrs) falls within the eligible range of ${minAge}-${maxAge} yrs.`,
          hi: `आपकी आयु (${profile.age} वर्ष) ${minAge}-${maxAge} वर्ष की पात्र सीमा के अंतर्गत आती है।`
        }
      });
    } else {
      reasons.push({
        criterion: 'Age Criteria',
        matched: false,
        pointsEarned: 0,
        maxPoints: 20,
        explanation: {
          en: `Requires age between ${minAge}-${maxAge} yrs (Your age: ${profile.age} yrs).`,
          hi: `आयु ${minAge}-${maxAge} वर्ष के बीच आवश्यक है (आपकी आयु: ${profile.age} वर्ष)।`
        }
      });
    }
  } else {
    agePoints = 15; // default partial credit
  }

  // 2. Income Match (Max 25 Points)
  let incomePoints = 0;
  if (criteria.maxAnnualIncome) {
    if (profile.annualIncome <= criteria.maxAnnualIncome) {
      incomePoints = 25;
      reasons.push({
        criterion: 'Income Cap',
        matched: true,
        pointsEarned: 25,
        maxPoints: 25,
        explanation: {
          en: `Annual income (₹${profile.annualIncome.toLocaleString('en-IN')}) is below the scheme threshold of ₹${criteria.maxAnnualIncome.toLocaleString('en-IN')}.`,
          hi: `वार्षिक आय (₹${profile.annualIncome.toLocaleString('en-IN')}) योजना की सीमा ₹${criteria.maxAnnualIncome.toLocaleString('en-IN')} से कम है।`
        }
      });
    } else {
      reasons.push({
        criterion: 'Income Cap',
        matched: false,
        pointsEarned: 0,
        maxPoints: 25,
        explanation: {
          en: `Annual income exceeds scheme limit of ₹${criteria.maxAnnualIncome.toLocaleString('en-IN')}.`,
          hi: `वार्षिक आय योजना की सीमा ₹${criteria.maxAnnualIncome.toLocaleString('en-IN')} से अधिक है।`
        }
      });
    }
  } else {
    // No income cap specified by scheme -> Full points for open access
    incomePoints = 25;
    reasons.push({
      criterion: 'Income Criteria',
      matched: true,
      pointsEarned: 25,
      maxPoints: 25,
      explanation: {
        en: `This scheme has no restrictive income upper limit.`,
        hi: `इस योजना की कोई प्रतिबंधात्मक आय ऊपरी सीमा नहीं है।`
      }
    });
  }

  // 3. Occupation Match (Max 20 Points)
  let occupationPoints = 0;
  const allowedOccupations = criteria.occupations ?? ['all'];
  const profileOcc = profile.occupation?.toLowerCase() || 'all';

  if (
    allowedOccupations.includes('all') ||
    allowedOccupations.includes(profileOcc) ||
    (profile.isFarmer && allowedOccupations.includes('farmer')) ||
    (profile.isStudent && allowedOccupations.includes('student')) ||
    (profile.isEntrepreneur && allowedOccupations.includes('entrepreneur')) ||
    (profileOcc === 'artisan' && allowedOccupations.includes('artisan'))
  ) {
    occupationPoints = 20;
    reasons.push({
      criterion: 'Occupation Eligibility',
      matched: true,
      pointsEarned: 20,
      maxPoints: 20,
      explanation: {
        en: `Your occupation status aligns with target beneficiaries.`,
        hi: `आपकी व्यवसाय स्थिति लक्षित लाभार्थियों के अनुकूल है।`
      }
    });
  } else {
    reasons.push({
      criterion: 'Occupation Eligibility',
      matched: false,
      pointsEarned: 5,
      maxPoints: 20,
      explanation: {
        en: `Primarily targets: ${allowedOccupations.join(', ')}.`,
        hi: `मुख्य रूप से लक्ष्य: ${allowedOccupations.join(', ')}।`
      }
    });
    occupationPoints = 5;
  }

  // 4. State & Residence Match (Max 15 Points)
  let statePoints = 0;
  const isStateApplicable =
    scheme.applicableStates.includes('All India') ||
    scheme.applicableStates.includes(profile.state);

  const isResidenceTypeOk =
    !criteria.residenceType ||
    criteria.residenceType === 'all' ||
    criteria.residenceType === profile.residenceType;

  if (isStateApplicable && isResidenceTypeOk) {
    statePoints = 15;
    reasons.push({
      criterion: 'State & Residence',
      matched: true,
      pointsEarned: 15,
      maxPoints: 15,
      explanation: {
        en: `Applicable in ${profile.state || 'All India'} (${profile.residenceType} area).`,
        hi: `${profile.state || 'अखिल भारतीय'} (${profile.residenceType} क्षेत्र) में लागू।`
      }
    });
  } else if (isStateApplicable) {
    statePoints = 10;
  } else {
    statePoints = 0;
  }

  // 5. Category / Gender Match (Max 10 Points)
  let categoryPoints = 0;
  const genderOk =
    !criteria.gender ||
    criteria.gender === 'all' ||
    criteria.gender === profile.gender;

  if (genderOk) {
    categoryPoints = 10;
    reasons.push({
      criterion: 'Demographic Target',
      matched: true,
      pointsEarned: 10,
      maxPoints: 10,
      explanation: {
        en: `Gender and category criteria satisfied.`,
        hi: `लिंग और श्रेणी के मानदंड संतुष्ट हैं।`
      }
    });
  } else {
    categoryPoints = 0;
  }

  // 6. Profile Attributes (Disability, Caste, Family) (Max 10 Points)
  let profilePoints = 10;
  if (criteria.disabilityOnly && !profile.hasDisability) {
    profilePoints = 0;
  }

  const totalPoints = agePoints + incomePoints + occupationPoints + statePoints + categoryPoints + profilePoints;
  const matchPercentage = Math.min(100, Math.round(totalPoints));

  let matchLabel: 'Excellent Match' | 'Good Match' | 'Possible Match' | 'Low Match' = 'Low Match';
  let matchLabelHi = 'कम मैच';

  if (matchPercentage >= 85) {
    matchLabel = 'Excellent Match';
    matchLabelHi = 'उत्कृष्ट मैच';
  } else if (matchPercentage >= 70) {
    matchLabel = 'Good Match';
    matchLabelHi = 'अच्छा मैच';
  } else if (matchPercentage >= 50) {
    matchLabel = 'Possible Match';
    matchLabelHi = 'संभावित मैच';
  }

  return {
    scheme,
    matchPercentage,
    matchLabel,
    matchLabelHi,
    breakdown: {
      agePoints,
      incomePoints,
      occupationPoints,
      statePoints,
      categoryPoints,
      profilePoints
    },
    reasons
  };
}
