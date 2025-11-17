import shutil
from pathlib import Path

def on_post_build(config, **kwargs):
    """Copia imagens PNG/JPG para pastas de notebooks após o build"""
    site_dir = Path(config['site_dir'])
    docs_dir = Path(config['docs_dir'])
    
    # Para cada notebook convertido, copia imagens da pasta pai
    for nb_html in site_dir.rglob('*/index.html'):
        nb_folder = nb_html.parent
        
        # Identifica a pasta source correspondente no docs_dir
        rel_path = nb_folder.relative_to(site_dir)
        source_folder = docs_dir / rel_path.parent
        
        # Se for uma pasta de notebook (tem index.html mas não é raiz)
        if nb_folder != site_dir and source_folder.exists():
            # Copia todas as imagens da pasta source para a pasta do notebook
            for ext in ['*.png', '*.jpg', '*.jpeg', '*.gif', '*.svg']:
                for img in source_folder.glob(ext):
                    dest = nb_folder / img.name
                    if not dest.exists():
                        shutil.copy2(img, dest)
                        print(f"Copiado: {img.name} -> {nb_folder.relative_to(site_dir)}")