import os
import re
# Remove auto generated js files

files = [f for f in os.listdir('.') if re.match(r'src\.[a-z0-9]+\.(js.map|js)?', f)]

for f in files:
    os.remove(f)
