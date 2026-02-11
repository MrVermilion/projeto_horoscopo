import os
import re

# Caminho da pasta onde estão os arquivos dos signos
folder_path = 'pages'

def update_html_files():
    if not os.path.exists(folder_path):
        print(f"Erro: A pasta '{folder_path}' não foi encontrada.")
        return

    for filename in os.listdir(folder_path):
        if filename.endswith('.html'):
            file_path = os.path.join(folder_path, filename)
            
            with open(file_path, 'r', encoding='utf-8') as file:
                content = file.read()

            # 1. Remove o bloco <style> interno (se existir)
            content = re.sub(r'<style>.*?</style>', '', content, flags=re.DOTALL)

            # 2. Atualiza o link do CSS para a raiz
            content = content.replace('href="style.css"', 'href="../style.css"')

            # 3. Atualiza o link do Script (caso use externo)
            content = content.replace('src="script.js"', 'src="../script.js"')

            # 4. Corrige o botão de voltar
            content = content.replace("window.location.href='index.html'", "window.location.href='../index.html'")

            # 5. Corrige o caminho das imagens no estilo inline que restou
            content = content.replace("url('images/", "url('../images/")

            with open(file_path, 'w', encoding='utf-8') as file:
                file.write(content)
            
            print(f"✅ {filename} atualizado com sucesso!")

if __name__ == "__main__":
    update_html_files()