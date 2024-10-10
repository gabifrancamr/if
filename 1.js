function getMinSubsequences(input_str) {
  // Se a string for vazia ou tiver um único caractere, basta um pacote
  if (input_str.length <= 1) return 1;

  let sequence = "";
  let subsequence = [];

  // Percorre a string
  for (let i = 0; i < input_str.length; i++) {
    // 00100
    if (input_str[i] !== input_str[i - 1]) {
      sequence += input_str[i];
    } else {
      subsequence.push(input_str[i]);
    }
  }

  subsequence.push(sequence);

  for(let i = 0; i < subsequence.length; i++) {
    if(subsequence[i].length === 1 && subsequence[i + 1].length === 1) {
        if(subsequence[i] !== subsequence[i + 1]) {
            subsequence = combinarArray(subsequence)
        }
    }
  }

return subsequence;
}

function combinarArray(arr) {
    let resultado = [];
    for (let i = 0; i < arr.length; i++) {
        if (i + 1 < arr.length && arr[i] !== arr[i + 1]) {
            resultado.push(arr[i] + arr[i + 1]);
            i++; // Pula para o próximo +2 item
        } else {
            resultado.push(arr[i]);
        }
    }
    return resultado;
}

// Exemplos de uso:
console.log(getMinSubsequences("1101"));
console.log(getMinSubsequences("00100"));
console.log(getMinSubsequences("11001010"));
