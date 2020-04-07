# What is a RESTful API? Explanation of REST & HTTP
- Traversy Media
- [https://www.youtube.com/watch?v=Q-BpqyOT3a8](https://www.youtube.com/watch?v=Q-BpqyOT3a8)
- Feb 17, 2017
- Completed Apr 6, 2020
---
### What is an API?
- **A**pplication **P**rogram **I**nterface
- APIs are everywhere
- Contract provided by one piece of software to another
- Structured request and response

### What is REST?
- **Re**presentational **S**tate **T**ransfer
- **Architecture style** for designing networked applications
- Relies on a **stateless**, **client-server** protocol, almost always **HTTP**
- Treats server objects as resources that can be created or destroyed
- Can be used by virtually any programming language

### HTTP Methods
#### **GET**: 
- Retrieve data from a specified resource
- Examples:
  - https://mysite.com/api/users
  - https://mysite.com/api/users/1 **OR** https://mysite.com/api/users/details/1
#### **POST**:
- Submit data to be processed to a specified resource
- Examples:
  - https://mysite.com/api/users
#### **PUT**:
- Update a specified resource
- Examples:
  - https://mysite.com/api/users/1 **OR** https://mysite.com/api/users/update/1
#### **DELETE**:
- Delete a specified resource
- Examples:
  - https://mysite.com/api/users/1 **OR** - https://mysite.com/api/users/delete/1
#### **HEAD**: 
- Same as get but does not return a body
#### **OPTIONS**:
- Returns the supported HTTP methods
#### **PATCH**:
- Update partial resources

### Authentication
- Some API's require authentication to use their service.
- This could be free or paid.
- Examples:
  - curl -H "Authorization: token OATH-TOKEN" https://api.github.com
  - curl https://api.github.com/?access_token=OAUTH-TOKEN
  - curl 'https://api.github.com/users/whatever?client_id=xxxx&client_secret=yyyy'