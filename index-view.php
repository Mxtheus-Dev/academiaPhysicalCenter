<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Physical Center</title>
<link rel="stylesheet" href="style.css">
</head>

<body>


<!-- =========================
        HEADER
========================= -->

<header>

    <!-- Logo da academia -->
    <div class="logo">
        <h1>Physical Center</h1>
    </div>

    <!-- Menu de navegação -->
    <nav class="menu">

        <a href="index.php">Home</a>
        <a href="planos.html">Planos</a>
        <a href="aluno.html">Área do aluno</a>

    </nav>

</header>


<!-- =========================
        HERO (BANNER)
========================= -->

<section class="hero">

    <h2>Transforme seu corpo</h2>

    <p>A melhor academia para evolução física</p>

    <button onclick="window.location.href='planos.html'">
        Começar agora
    </button>

</section>


<!-- =========================
        CARROSSEL
========================= -->

<section class="carrosel">

    <div class="slides">

        <?php foreach($imagensCarrosel as $imagem): ?>

            <img src="<?php echo $imagem; ?>">

        <?php endforeach; ?>

    </div>

</section>


<!-- =========================
        ESTRUTURA DA ACADEMIA
========================= -->

<section>

    <h2><?php echo $estruturaTitulo; ?></h2>

    <div class="cards">

        <!-- Card 1 -->
        <div class="card">

            <h3><?php echo $card1Titulo; ?></h3>

            <p><?php echo $card1Texto; ?></p>

        </div>

        <!-- Card 2 -->
        <div class="card">

            <h3><?php echo $card2Titulo; ?></h3>

            <p><?php echo $card2Texto; ?></p>

        </div>

        <!-- Card 3 -->
        <div class="card">

            <h3><?php echo $card3Titulo; ?></h3>

            <p><?php echo $card3Texto; ?></p>

        </div>

    </div>

</section>


<!-- =========================
        FOOTER
========================= -->

<footer>

    <div class="footer-container">

        <!-- Informações da empresa -->
        <div class="footer-info">

            <h3><?php echo $empresa; ?></h3>

            <p><?php echo $descricao; ?></p>

        </div>


        <!-- Contato -->
        <div class="footer-contato">

            <h3><?php echo $contatoTitulo; ?></h3>

            <p>📍 <?php echo $cidade; ?></p>

            <p>📞 <?php echo $telefone; ?></p>

            <p>📧 <?php echo $email; ?></p>

        </div>


        <!-- Horário de funcionamento -->
        <div class="footer-horario">

            <h3><?php echo $horarioTitulo; ?></h3>

            <p><?php echo $horario1; ?></p>

            <p><?php echo $horario2; ?></p>

            <p><?php echo $horario3; ?></p>

        </div>

    </div>

</footer>


<!-- Javascript -->
<script src="script.js"></script>

</body>
</html>