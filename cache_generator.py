from datetime import date
import uuid
import os

output = [
    "CACHE MANIFEST",
    "{}:{}".format(date.today().isoformat(), uuid.uuid4()),
"",
    "CACHE:",
    "index.html",
    "bundle.js"
]

for item in os.listdir('posts'):
    output.append('posts/{}'.format(item))

output.extend(['NETWORK:', '*'])

with open('cache.manifest', 'w') as f:
    f.write('\n'.join(output))
