# GameShop BackEnd

## Schemas:
- Users
    - name
    - pwd
    - email
    - admin (Boolean)
- Games
    - name
    - catagory
    - price
    - description
    - numOfPlayers
    - quantity
- Cart
    - useID
    - items (List of Games)
    - total (Price - Virtual?)

## Routes
- Users
    - Create - post
    - Read - get all
    - Read One - get one by id
    - Update - put
    - Delete - delete

- Games
    - Create - post (admin)
    - Read - get all
    - Read One - get one by id
    - Update - put (admin)
    - Delete - delete (admin)

- Cart
    - Create - post (add to cart)
    - Read - get all 
    - Read One - get one by id (admin)
    - Update - put (add item to cart)
    - Delete - delete (cart)

## Technologies
- npm init -y
- npm i express dotenv mongoose morgan cors
- touch .env .gitignore
