<script>
        document.getElementById("form-gerar").addEventListener("submit", function(e) {
            e.preventDefault(); // Impede envio real do formulário
            const feedback = document.getElementById("feedback");
            feedback.style.display = "block"; // Mostra o feedback
            
            // Simula carregamento
            setTimeout(() => {
                alert("Imagem gerada com sucesso!");
                feedback.style.display = "none";
            }, 2000);
        });
    </script>
