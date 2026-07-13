const fs = require('fs');
const marked = require('marked');
const puppeteer = require('puppeteer');

(async () => {
    try {
        const md = fs.readFileSync('/home/fernando/Documentos/curriculo/Curriculo_Bradesco_Java.md', 'utf-8');
        const htmlContent = marked.parse(md);
        
        const html = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <style>
                    body {
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        line-height: 1.3;
                        color: #111;
                        max-width: 100%;
                        margin: 0 auto;
                        font-size: 11px;
                        padding: 0;
                    }
                    h1 {
                        color: #2c3e50;
                        margin: 0 0 5px 0;
                        font-size: 20px;
                        text-align: center;
                    }
                    p {
                        margin: 0 0 5px 0;
                    }
                    h2 {
                        color: #34495e;
                        font-size: 13px;
                        margin: 10px 0 5px 0;
                        border-bottom: 1px solid #ccc;
                        padding-bottom: 2px;
                        text-transform: uppercase;
                    }
                    ul {
                        margin: 0 0 8px 0;
                        padding-left: 18px;
                    }
                    li {
                        margin-bottom: 3px;
                        text-align: justify;
                    }
                    a {
                        color: #2980b9;
                        text-decoration: none;
                    }
                    strong {
                        color: #2c3e50;
                    }
                    .header-info {
                        text-align: center;
                        margin-bottom: 12px;
                    }
                </style>
            </head>
            <body>
                ${htmlContent}
            </body>
            </html>
        `;
        
        const browser = await puppeteer.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await browser.newPage();
        await page.setContent(html, { waitUntil: 'networkidle0' });
        await page.pdf({
            path: '/home/fernando/Documentos/curriculo/Curriculo_Bradesco_Java.pdf',
            format: 'A4',
            printBackground: true,
            margin: {
                top: '15mm',
                right: '15mm',
                bottom: '15mm',
                left: '15mm'
            }
        });
        
        await browser.close();
        console.log('PDF gerado com sucesso!');
    } catch (error) {
        console.error('Erro ao gerar PDF:', error);
    }
})();
