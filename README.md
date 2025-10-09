# 📝 Formulário de Cadastro Interativo
Um formulário de cadastro moderno e responsivo, focado na experiência do usuário (UX). O projeto inclui validação de campos (como confirmação e tamanho mínimo de senha), feedback visual imediato ao focar nos campos e uma animação completa no botão de envio (Loading → Sucesso) para simbolizar o processamento dos dados e limpar o formulário ao final.

## 🌐 Visualize o projeto:
[Ver Projeto Online](https://otavio-2507.github.io/Formulario_Cadastro_Interativo/)

## 🛠️ Tecnologias Utilizadas
- HTML5: Estrutura semântica para o formulário e inclusão de elementos de animação (spinner, checkmark).
- CSS3: Estilização moderna, responsividade, uso de backdrop-filter para o efeito "vidro embaçado" e implementação de animações avançadas (@keyframes e :focus) para o loading e highlight de campos.
- JavaScript: Lógica de validação de senha, controle do estado do botão de envio (Normal, Loading, Success) e a funcionalidade de limpeza completa dos campos após o cadastro bem-sucedido.
- Boxicons: Biblioteca de ícones utilizada para campos (usuário, senha, etc.) e o sinal de checkmark de sucesso.

## 🚀 Como Executar
Este projeto é totalmente client-side e não requer nenhuma configuração de servidor.

1. Clone o Repositório: Baixe ou clone o código do projeto para sua máquina local.
2. Abra no Navegador: Navegue até a pasta do projeto e abra o arquivo index.html no seu navegador de preferência (Chrome, Firefox, etc.).
3. Interaja com os Campos: Teste a animação de foco: clique ou navegue (via Tab) pelos campos e observe as bordas ficarem brancas.
4. Teste a Validação: Tente cadastrar com senhas que não coincidem ou que tenham menos de 8 caracteres. As mensagens de erro aparecerão abaixo dos campos.
5. Teste a Animação de Sucesso: Preencha os campos corretamente e clique em Cadastrar. O botão:
6. Se transformará em um círculo giratório (Loading).
7. Mudar para um sinal de correto (Success).
8. Exibirá a mensagem de sucesso e, ao clicar em OK, limpará todos os dados do formulário.

Sem configurações extras – todas as funcionalidades são controladas por JavaScript e CSS
