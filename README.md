# Inventário

Aplicação web simples para importar relatórios de contagem de estoque no formato `.xlsx` e gerar um layout de inventário editável.

## Funcionalidades

- Importação de arquivo `.xlsx` via navegador
- Conversão de planilha em tabela de inventário
- Edição de contagem diretamente na interface
- Marcação de itens como conferidos (status OK)
- Visualização de divergências entre valores originais e valores editados
- Geração de relatório para impressão

## Arquivos principais

- `index.html` — página principal com o formulário de importação
- `styleHome.css` — estilos da interface
- `getJson.js` — lógica de leitura do arquivo, geração da tabela, edição e relatório
- `effects.js` — interações de edição, status de conferência e validação de divergências

## Como usar

1. Abra `index.html` no navegador.
2. Clique em `Importe relatório de Contagem` e selecione um arquivo `.xlsx`.
3. Clique em `Gerar Relatório` para exibir os dados.
4. Edite valores, marque itens como `OK` e clique em `Mostrar Divergências` ou `Salvar`.

## Observações

- O projeto usa a biblioteca `xlsx` via CDN para ler arquivos Excel.
- Os dados podem ser salvos no `localStorage` do navegador para reutilização futura.
- A interface ainda está em desenvolvimento e pode ser ajustada para maior robustez e validações adicionais.

## Lógica de persistência implementada

A persistência foi adicionada para que, ao recarregar a página, o estado atual do inventário não seja perdido.

- `localStorage` armazena o estado completo da tabela sob a chave `inventarioEstado`.
- Quando o usuário gera a tabela a partir do `.xlsx`, os valores originais e o estado atual das linhas são gravados.
- Cada linha salva inclui: reservas, posição, caixas, pacotes, maços, SKU, descrição, observação, valores originais e se o status está marcado como `OK`.
- Ao recarregar a página, o script carrega esse estado salvo e reconstrói a tabela exatamente como estava, incluindo os botões de status já marcados.
- As edições no conteúdo das células e as alterações de status disparam a gravação automática no `localStorage`, mantendo o inventário sempre atualizado.
