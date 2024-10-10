function minimumEnergy(river, initial_x, initial_y, final_x, final_y) {
    const n = river.length;
    const m = river[0].length;

    // Movimentos: [dx, dy, custo]
    const moves = [
        [1, 0, 0],  // para baixo
        [0, 1, 0],  // para direita
        [-1, 0, 1], // para cima
        [0, -1, 1]  // para esquerda
    ];

    // Matriz para armazenar a energia mínima para cada célula
    const energy = Array.from({ length: n }, () => Array(m).fill(Infinity));
    energy[initial_x][initial_y] = 0;

    // Fila de prioridade (usando BFS modificada)
    const queue = [[initial_x, initial_y, 0]]; // [x, y, energia]

    while (queue.length > 0) {
        // Desenfileirar a célula com menor energia
        const [x, y, currEnergy] = queue.shift();

        // Se já chegamos no destino
        if (x === final_x && y === final_y) {
            return currEnergy;
        }

        // Explorar todas as direções possíveis
        for (const [dx, dy, cost] of moves) {
            const newX = x + dx;
            const newY = y + dy;

            // Verificar se a nova posição é válida e sem obstáculos
            if (newX >= 0 && newX < n && newY >= 0 && newY < m && river[newX][newY] === '.') {
                const newEnergy = currEnergy + cost;

                // Se a nova energia é menor do que a armazenada, atualizamos
                if (newEnergy < energy[newX][newY]) {
                    energy[newX][newY] = newEnergy;
                    queue.push([newX, newY, newEnergy]);
                }
            }
        }

        // Ordenar a fila para sempre priorizar o caminho com menor energia
        queue.sort((a, b) => a[2] - b[2]);
    }

    // Se não foi possível chegar ao destino
    return -1;
}

const river = [
  ".#.",
  ".##",
  "...",
];
const initial_x = 2, initial_y = 0, final_x = 0, final_y = 2;

console.log(minimumEnergy(river, initial_x, initial_y, final_x, final_y)); 