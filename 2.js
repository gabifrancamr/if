function getMinOperations(change, arr) {
    let operations = 0;
    let n = change.length;
    let m = arr.length;

    for (let i = 0; i < n; i++) {
        let changed = false;

        // Se o valor de change[i] for maior que 0 e arr[change[i]-1] for 0, altere para NULL
        if (change[i] > 0 && arr[change[i] - 1] === 0) {
            arr[change[i] - 1] = null;
            operations++;
            changed = true;
        } else {
            // Decrementa qualquer elemento que não seja NULL
            for (let j = 0; j < m; j++) {
                if (arr[j] > 0) {
                    arr[j]--;
                    operations++;
                    changed = true;
                    break;
                }
            }
        }

        // Se não foi possível fazer nenhuma mudança, retornamos -1
        if (!changed) {
            return -1;
        }

        // Se todos os elementos forem NULL, retornar o número de operações
        if (arr.every(x => x === null)) {
            return operations;
        }
    }

    // Se o loop terminar e ainda restar algum número não NULL, retorna -1
    return arr.every(x => x === null) ? operations : -1;
}

// Testes
console.log(getMinOperations([0, 1, 0, 2], [1, 1])); // Saída: 4
console.log(getMinOperations([1, 0, 1, 3, 2, 1, 0, 3, 1, 1], [2, 1, 2])); // Saída: 8
console.log(getMinOperations([0, 0, 0, 2, 1, 3, 2], [1, 3, 2])); // Saída: -1
