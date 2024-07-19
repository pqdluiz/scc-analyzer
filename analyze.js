const { exec } = require("child_process");

// Caminho para o diretório que você deseja analisar
const pathToAnalyze = ".";
// Formato de saída (opções: 'json', 'csv', 'yaml', 'html', 'cloc-yaml')
const outputType = "json";

exec(`scc --format ${outputType} ${pathToAnalyze}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Erro ao executar scc: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`Erro: ${stderr}`);
    return;
  }

  try {
    const result = JSON.parse(stdout);
    console.log("Resultado da análise:", result);
  } catch (e) {
    console.error("Erro ao analisar a saída JSON:", e);
  }
});
