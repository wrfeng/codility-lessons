
// time complexity O(n)
// space complexity(n^2)
// fails cases where queries first 4 chars and they are unique
// 
function solution(S, P, Q) {
  let impactFactor = { A: 1, C: 2, G: 3, T: 4 }
  let count = { A: 0, C: 0, G: 0, T: 0 }
  let counters = []
  let minimalImpactFactors = []

  for (let i = 0; i < S.length; i++) {
    counters.push({ ...count, [S[i]]: ++count[S[i]] })

  }

  for (let i = 0; i < P.length; i++) {
    if (counters[Q[i]].A - counters[P[i]].A > 0) {
      minimalImpactFactors.push(impactFactor.A)
    } else if (counters[Q[i]].C - counters[P[i]].C > 0) {
      minimalImpactFactors.push(impactFactor.C)
    } else if (counters[Q[i]].G - counters[P[i]].G > 0) {
      minimalImpactFactors.push(impactFactor.G)
    } else if (counters[Q[i]].T - counters[P[i]].T > 0) {
      minimalImpactFactors.push(impactFactor.T)
    } else {
      minimalImpactFactors.push(impactFactor[S[Q[i]]])
    }
  }

  return minimalImpactFactors
}