import os

image_directory = './procreate'

valid_extensions = ['.jpg', '.jpeg', '.png', '.gif']

image_files = []
for root, dirs, files in os.walk(image_directory):
    for file in files:
        if any(file.lower().endswith(ext) for ext in valid_extensions):
            image_files.append(file)

js_code = "const imageFiles = [\n"
js_code += ",\n".join([f'  "{image_directory[1:]}/{image}"' for image in image_files])
js_code += "\n];\n"
js_code += "export default imageFiles;\n"

with open('imageFiles.js', 'w') as f:
    f.write(js_code)

print(f"Generated image file list in 'imageFiles.js'")
