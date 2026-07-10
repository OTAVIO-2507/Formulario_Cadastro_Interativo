<div align="center">

# Formulário de Cadastro Interativo

Formulário de cadastro focado em experiência do usuário: validação em tempo real, feedback visual imediato e uma animação completa de envio (carregando, sucesso e limpeza dos campos), construído apenas com HTML, CSS e JavaScript.

![Tecnologias utilizadas](https://skillicons.dev/icons?i=html,css,js)

[![Ver demonstração](https://img.shields.io/badge/Ver_demonstra%C3%A7%C3%A3o-2EA44F?style=for-the-badge)](https://otavio-2507.github.io/Formulario_Cadastro_Interativo/)

</div>

## Visão geral

O projeto explora os detalhes que tornam um formulário agradável de usar: cada campo responde ao foco com destaque visual, a senha é validada em tempo real (tamanho mínimo e confirmação) e o botão de envio percorre um ciclo completo de estados — normal, carregando e sucesso — antes de limpar o formulário. O visual usa efeito de vidro fosco (backdrop-filter) sobre imagem de fundo.

## Funcionalidades

- Validação de senha com tamanho mínimo e confirmação de igualdade
- Feedback visual imediato ao focar e preencher os campos
- Botão de envio com estados animados: normal, carregando (spinner) e sucesso (checkmark)
- Limpeza automática dos campos após o cadastro bem-sucedido
- Efeito de vidro fosco com `backdrop-filter` sobre imagem de fundo
- Layout responsivo para desktop e dispositivos móveis

## Tecnologias

| Tecnologia | Aplicação no projeto |
| --- | --- |
| HTML5 | Estrutura semântica do formulário e elementos de animação |
| CSS3 | Efeito de vidro, estados de foco, animações com `@keyframes` |
| JavaScript (ES6+) | Validação dos campos e controle de estados do botão |

## Como executar

```bash
git clone https://github.com/OTAVIO-2507/Formulario_Cadastro_Interativo.git
cd Formulario_Cadastro_Interativo
```

Abra o arquivo `index.html` no navegador. O projeto é totalmente client-side, sem dependências externas.

## Estrutura do projeto

```
Formulario_Cadastro_Interativo/
├── index.html              Página do formulário
└── src/
    ├── javascript/
    │   └── script.js       Validação e estados do botão
    ├── style/
    │   └── style.css       Estilos, animações e efeito de vidro
    └── img/                Imagens de fundo
```

