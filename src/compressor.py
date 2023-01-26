from PIL import Image as i
import os

new_path = './images/thumbnails'
if not os.path.exists(new_path):
    os.makedirs(new_path)

for file in os.scandir('./images/gallery copy/'):
    f = i.open(file.path)
    f = f.resize((f.size[0] // 2, f.size[1] // 2))
    f.save('{}/{}'.format(new_path, file.name), quality=50)
    print(file.name)

