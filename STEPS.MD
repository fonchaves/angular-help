## Steps

1. Install Server
   `ng new [project-name]`

2. Run server
   `ng serve --open`

3. Create a new component via CLI
   `ng generate component components/Todos`

4. Create a new component with short syntax via CLI
   `ng g c components/TodoItem`

5. Create a service with a funcionality to get todos of json-server
   `ng g s services/Todo`

6. Create a new componente to make the header layout with input
   `ng g c components/layout/Header`

7. Create a new component to add todo
   `ng g c components/AddTodo`

8. Create a new component of about to demonstrate route funcionality
   `ng g c components/pages/About`

9. To build the project
   `ng build`

### Finally, steps to catch the gold

10. Create a component to get data from user
    `ng g c components/AddUser`

11. Create a component to show form and list Users
    `ng g c components/Users`

12. Create a model User to specify format of object in TypeScript

13. Make a service User to get data via http from json-server
    `ng g s services/User`

14. Create a db with some data to test Service, I use json-server
    `json-server --watch db.json`

15. Configure `users.component.ts` to receive and transmite users

16. Create a new component to list User, for educacional proposes
    `ng g c components/UserItem`

17. Transform ngModels to FormGroup in `add-user.component`

18. Create a component to get address from user
    `ng g c components/AddressCheckout`

19. Modify `app-routing-modules` to make routes to reach forms
