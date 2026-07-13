const fs = require('fs');
const path = require('path');
const marked = require('marked');
const puppeteer = require('puppeteer');

(async () => {
    try {
        const publicDir = path.resolve(__dirname, '../public');
        const ptMdPath = path.join(publicDir, 'currículo.md');
        const enMdPath = path.join(publicDir, 'resume_en.md');

        const ptPdfPath = path.join(publicDir, 'Curriculo_Fernando_Cesar_Bezerra_Silva.pdf');
        const enPdfPath = path.join(publicDir, 'Resume_Fernando_Cesar_Bezerra_Silva.pdf');

        const getHtml = (mdContent) => {
            const htmlContent = marked.parse(mdContent);
            return `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <style>
                    body {
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        line-height: 1.35;
                        color: #1f2937;
                        max-width: 100%;
                        margin: 0 auto;
                        font-size: 10.5px;
                        padding: 0;
                    }
                    h1 {
                        color: #111827;
                        margin: 0 0 3px 0;
                        font-size: 19px;
                        text-align: center;
                        letter-spacing: -0.3px;
                        font-weight: 700;
                    }
                    p {
                        margin: 0 0 5px 0;
                        text-align: justify;
                    }
                    h2 {
                        color: #1e293b;
                        font-size: 12px;
                        margin: 10px 0 5px 0;
                        border-bottom: 1.5px solid #cbd5e1;
                        padding-bottom: 2px;
                        text-transform: uppercase;
                        letter-spacing: 0.6px;
                        font-weight: 700;
                    }
                    h3 {
                        color: #1e293b;
                        font-size: 11.5px;
                        margin: 8px 0 2px 0;
                        font-weight: 700;
                    }
                    ul {
                        margin: 0 0 6px 0;
                        padding-left: 16px;
                    }
                    li {
                        margin-bottom: 3.5px;
                        text-align: justify;
                    }
                    a {
                        color: #2563eb;
                        text-decoration: none;
                    }
                    strong {
                        color: #111827;
                        font-weight: 600;
                    }
                    em {
                        color: #4b5563;
                        font-size: 10px;
                        display: block;
                        margin-bottom: 3.5px;
                    }
                </style>
            </head>
            <body>
                ${htmlContent}
            </body>
            </html>
            `;
        };

        const browser = await puppeteer.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await browser.newPage();

        // Gerar PT
        console.log('Gerando PDF (Português)...');
        const ptMd = fs.readFileSync(ptMdPath, 'utf-8');
        await page.setContent(getHtml(ptMd), { waitUntil: 'domcontentloaded' });
        await page.pdf({
            path: ptPdfPath,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '12mm',
                right: '14mm',
                bottom: '12mm',
                left: '14mm'
            }
        });
        console.log('PDF PT gerado:', ptPdfPath);

        // Gerar EN
        console.log('Gerando PDF (Inglês)...');
        const enMd = fs.readFileSync(enMdPath, 'utf-8');
        await page.setContent(getHtml(enMd), { waitUntil: 'domcontentloaded' });
        await page.pdf({
            path: enPdfPath,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '12mm',
                right: '14mm',
                bottom: '12mm',
                left: '14mm'
            }
        });
        console.log('PDF EN gerado:', enPdfPath);

        await browser.close();
        console.log('Todos os PDFs gerados com sucesso!');
    } catch (error) {
        console.error('Erro ao gerar PDFs:', error);
        process.exit(1);
    }
})();
