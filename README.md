# Hi!

### Things I learned:
   - Components and props
   - Styling with CSS and SASS
      - custom theming bootstrap components
   - mapping over data when dynamically generating components
   - regex for importing image files
   - Manipulating image size and quality using PIL and python
   - React-router
   - gh-pages for packaging react project
   - Deploying to Github Pages
   - Followed Google's Material3 design language
   - Github pages does not support single page apps and `<HashRouter>` has to be used. When url/test
   is refreshed, the GH pages server cannot find /test. Refresh on homepage will work.

### Biggest Challenges:
   - Creating an image modal that looked and behaved the way I wanted it to
   - Making the layout responsive in a way that looked nice
   - Optimizing image gallery performance
      - Ended up having page load lower quality thumbnails on initial load and
      only get high quality image when it is selected, improving load times, page responsiveness, and lowering data usage

### Tools Used:
   - React.js, react-bootstrap, react-router, Typed.js

### To-do List:
   - Host images on database
   - Fix image modals on mobile
      - may involve a change to tailwindCSS
   - A way for users to like and comment on pictures

#### For me:
   - To update gh-pages
      - `cd my-app`
      - `npm run deploy -- -m "your message here"`
   - To update master
      - `git add .`
         `git commit -m "Configure React app for deployment to GitHub Pages"`
         `git push origin master`
