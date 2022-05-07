# Mail Front End

A simulated Web Mail application that allows users to register/login, compose, send, reply to emails, archive and delete emails, and mark emails as unread. Login sessions are handled using JSON Web Tokens (JWT)

## Rebuilt from the Ground Up

The front end of this application was rebuilt from scratch from an older version. It was previously built using vanilla Django with Django's template engine for the front end with vanilla javascript and css.

The application now utilizes a Django REST Framework API that the React front end can fetch data from. The application has been deployed as one unified project. The Django back-end and front-end build can be seen [here](https://github.com/IB21-A/mail-react)

### What's Different?

- React Front-end
- Django REST API Back-end
- JWT Authentication
- Axios Instead of Fetch API
- Centralized Front-end API
- Styled Components along with Bootstrap Components

### [View this Project on Heroku](https://mail-thom.herokuapp.com/)
