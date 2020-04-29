docker pull mongo
docker run -d -p 27017:27107 mongo mongo
npm i 
npm run dev

METHODS: GET PUT POST DELETE
curl --location --request POST 'http://localhost:3000/player' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Billing",
    "surname": "Spacy" ,
    "phone": "009987",
    "email":"bill@gmail.com"
}'