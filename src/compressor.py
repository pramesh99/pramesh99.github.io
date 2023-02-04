from PIL import Image as i
import os
import math

'''
This script compresses images to 50% of their quality 
and reduces their dimensions by half.

These parameters can be adjusted below.
'''

new_path = './images/galleryv2' # DESTINATION FOLDER
if not os.path.exists(new_path):
    os.makedirs(new_path)

for file in os.scandir('./images/gallery'): # IMPORT FOLDER
    if (file.name.endswith('.jpg')):
        f = i.open(file.path)
        f = f.resize((math.floor(f.size[0] / 1.5), math.floor(f.size[1] / 1.5)))
        f.save('{}/{}'.format(new_path, file.name), quality=80)
        print(file.name)

