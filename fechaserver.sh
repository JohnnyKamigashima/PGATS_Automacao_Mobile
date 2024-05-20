#!/bin/bash

# Busca pelo PID do processo servidor na porta 4723
PID=$(lsof -i :4723 | awk 'NR==2{print $2}')

# Se o PID foi encontrado, fecha o processo
if [ ! -z "$PID" ]; then
    echo "Processo servidor na porta 4723 encontrado com PID $PID. Fechando o processo..."
    kill $PID
    echo "Processo fechado com sucesso."
else
    echo "Nenhum processo servidor na porta 4723 foi encontrado."
fi

npm run wdio