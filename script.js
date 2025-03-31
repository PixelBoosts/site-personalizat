document.addEventListener('DOMContentLoaded', function() {
    alert('Bun venit pe site-ul meu!');
});

În fișierul index.html, adaugă un link către fișierul JavaScript înainte de închiderea tag-ului </body>:

<body>
    <h1>Bun venit pe site-ul meu!</h1>
    <script src="script.js"></script>
</body>
