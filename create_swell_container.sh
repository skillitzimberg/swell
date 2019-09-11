docker create \
--name=swell \
-e TZ=America/Los_Angeles \
-p 8080:8080 \
--restart unless-stopped \
swell