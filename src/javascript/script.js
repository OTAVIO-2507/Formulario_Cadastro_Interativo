function selectGender(gender) {
    document.getElementById('gender').value = gender;
    const buttons = document.querySelectorAll('.gender-button');
    buttons.forEach(button => {
        button.classList.remove('selected');
    });
    // Remove o estado 'selected' dos botões de gênero
    document.getElementById('male-button').classList.remove('selected');
    document.getElementById('female-button').classList.remove('selected');
    document.getElementById('other-button').classList.remove('selected');

    // Adiciona o estado 'selected' ao botão clicado
    document.getElementById(gender === 'masculino' ? 'male-button' : (gender === 'feminino' ? 'female-button' : 'other-button')).classList.add('selected');
}

/**
 * Alterna a visibilidade do campo de senha e troca o ícone do olho.
 */
function togglePassword(inputId, icon) {
    const input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text"; 
        icon.classList.remove('bxs-show'); 
        icon.classList.add('bxs-hide'); 
    } else {
        input.type = "password"; 
        icon.classList.remove('bxs-hide'); 
        icon.classList.add('bxs-show'); 
    }
}

/**
 * Valida o formulário, controla a animação do botão e limpa os campos em caso de sucesso.
 */
function validateForm(event) {
    // PREVINE o envio padrão do formulário
    event.preventDefault(); 
    
    const form = document.getElementById('registration-form');
    const btn = document.getElementById('register-btn');
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const passwordError = document.getElementById('password-error');
    const confirmPasswordError = document.getElementById('confirm-password-error');
    
    // 1. Limpa estados anteriores e erros
    btn.classList.remove('loading', 'success');
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
    
    let isValid = true;

    // 2. Validações Síncronas
    if (password.length < 8) {
        passwordError.textContent = 'A senha deve ter no mínimo 8 caracteres.';
        isValid = false;
    }

    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'As senhas não coincidem.';
        isValid = false;
    }

    // 3. Controle do Fluxo da Animação
    if (isValid) {
        // A) Inicia o estado de Loading
        btn.classList.add('loading');
        
        // B) Simula o tempo de envio (1.5s)
        setTimeout(() => {
            
            // C) Remove Loading e adiciona o estado de Success
            btn.classList.remove('loading');
            btn.classList.add('success');
            
            // D) Opcional: Remove o estado de Success após 1.5s e retorna o botão ao normal
            setTimeout(() => {
                btn.classList.remove('success');
                
                // Exibe o alerta e LIMPA o formulário após o usuário clicar em OK
                alert("Cadastro realizado com sucesso!"); 
                
                // --- NOVA AÇÃO: LIMPAR O FORMULÁRIO ---
                form.reset(); 
                
                // Também removemos a seleção visual dos botões de gênero
                document.getElementById('male-button').classList.remove('selected');
                document.getElementById('female-button').classList.remove('selected');
                document.getElementById('other-button').classList.remove('selected');
                
            }, 1500); // Exibe o checkmark por 1.5 segundos

        }, 1500); // Simula 1.5 segundos de processamento (loading)
        
    } else {
        // Se a validação falhar, o botão permanece no estado normal e mostra os erros
        btn.classList.remove('loading');
    }
    
    // Retorna false para o onsubmit do HTML
    return false;
}