function redirectToClientPage() {
    $('#template').on('click', '#client', function() {
        window.location.href = "http://localhost/libaryASP/client";
    });
}

redirectToClientPage();

function setupSupportSection() {
    var initialContentHTML = $('#template').html();
    
    $('#template').on('click', '#support', function() {
        $('#template').slideUp(600, function() {
            var supportValidationHTML = `
                <h3 id="title">Seja bem-vindo!</h3>
                <span id="selectionInstruction">Digite a senha para continuar:</span>
                <div id="options">
                    <input  id="passwordSupport" type="password" placeholder="Digite sua senha..."></input>
                    <button class="btnOption" id="handleSupport">Entrar</button>
                </div>
                <div id="exitSupport"> 
                    <span id="textExitSupport">Não faz parte do time? <strong id="btnExitSupport">voltar</strong></span>
                <div>
            `;

            $('#template').html(supportValidationHTML).slideDown(600);
        });

    });

    $('#template').on('click', '#btnExitSupport', function() {
        $('#template').slideUp(600, function() {
            $('#template').html(initialContentHTML).slideDown(600);
        });
    });
}

setupSupportSection();

function displayPasswordError(password) {
    password.addClass('passwordError');
    password.attr('placeholder', 'Senha incorreta.');
    password.css('border-color', 'red');
}

function handlePasswordInputKeyUp(password) {
    $(password).on('keyup', function() {
        if(password.val().length < 1) {
            displayPasswordError(password)
        } else {
            password.removeClass('passwordError');
            password.css('border-color', '#b8afaf');
        };
    });
};

function handleSupportSubmit() {
    $(document).on('click', '#handleSupport',function() {
        let password = $('#passwordSupport');
        
        if(password.val() !== 'sup151617') {
            password.val('');
            displayPasswordError(password);
            handlePasswordInputKeyUp(password);
        } else {
            password.val('');
            window.location.href = "http://localhost/libaryASP/support";
        };
    });
};

handleSupportSubmit();