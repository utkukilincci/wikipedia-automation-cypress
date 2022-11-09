# wikipedia automation with cypress

## Run Tests

- You have to npm or yarn
- first run -> `npm install` or `yarn install` for installing node_modules  
- open cypress dashboard -> `npm run cypress:open` or `yarn cypress:open`
- for running tests -> `npm run cypress:run` or `yarn cypress:run`

## Cases

### Scenario 1:

*Search component should be shown correct*

- Go to https://en.wikipedia.org/w/index.php?search
- Take snapshot to search component and assert that using base image

Description: We have to check CSS/Images of our components/pages every update

### Scenario 2:

*Search logic should be return correct results*

- Go to https://en.wikipedia.org/w/index.php?search
- Type "Test" to search input
- Click on Search button
- Assert that the result header contains "Test"

Description: Search logic is our most basic and important feature. We have to check this logic every update.
