/**
 * NapNest Progressive Pricing Calculation Unit Test
 * Vibecode Kit v6.0 Quality Assurance Verification Script
 */

const calculatePrice = (hours) => {
  const baseHours = 2;
  const basePrice = 69000;
  const extraHourRate = 15000;
  
  if (hours <= baseHours) {
    return basePrice;
  }
  
  const extraHours = Math.max(0, Math.ceil(hours - baseHours));
  return basePrice + (extraHours * extraHourRate);
};

const runTests = () => {
  console.log("====================================================");
  console.log("NAPNEST PREMIUM PRICING ENGINE - COMPREHENSIVE TESTS");
  console.log("====================================================");

  const testCases = [
    { hours: 1, expected: 69000, desc: "Under base hours (1h)" },
    { hours: 2, expected: 69000, desc: "Exact base hours (2h)" },
    { hours: 3, expected: 84000, desc: "One extra hour (3h)" },
    { hours: 4, expected: 99000, desc: "Two extra hours (4h)" },
    { hours: 5.5, expected: 129000, desc: "Fractional hour boundary (5.5h -> rounded up to 6h)" },
    { hours: 12, expected: 219000, desc: "Maximum cap hours (12h)" },
    { hours: -2, expected: 69000, desc: "Negative input safety bounds (-2h)" },
  ];

  let passedCount = 0;
  let failedCount = 0;

  testCases.forEach((tc, idx) => {
    const result = calculatePrice(tc.hours);
    const passed = result === tc.expected;
    
    if (passed) {
      passedCount++;
      console.log(`[PASS] Case #${idx + 1} - ${tc.desc}: Input = ${tc.hours}h -> Result = ${result.toLocaleString()} VND (Expected = ${tc.expected.toLocaleString()} VND)`);
    } else {
      failedCount++;
      console.log(`[FAIL] Case #${idx + 1} - ${tc.desc}: Input = ${tc.hours}h -> Result = ${result.toLocaleString()} VND (Expected = ${tc.expected.toLocaleString()} VND)`);
    }
  });

  console.log("====================================================");
  console.log(`AUDIT RESULTS: ${passedCount} Passed | ${failedCount} Failed`);
  console.log("====================================================");

  if (failedCount > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
};

runTests();
