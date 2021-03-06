define({ "api": [
  {
    "type": "get",
    "url": "/generate-admin",
    "title": "Created admin with default password",
    "name": "Generate_admin",
    "group": "Auth",
    "version": "0.0.0",
    "filename": "app/controllers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/refresh-token",
    "title": "Refresh token",
    "name": "Refresh_token",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "refresh_token",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controllers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/sign-in",
    "title": "Sign in and get token",
    "name": "Sign_in",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Username or Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controllers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/sign-up",
    "title": "Register a new user",
    "name": "Sign_up",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controllers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/tokens",
    "title": "Get tokens list",
    "name": "Tokens_list",
    "group": "Auth",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "version": "0.0.0",
    "filename": "app/controllers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/send-confirm",
    "title": "Send confirm code on user email",
    "name": "Send_confirm",
    "group": "Email",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Username or Email</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controllers/users.js",
    "groupTitle": "Email"
  },
  {
    "type": "get",
    "url": "/send-restore",
    "title": "Send restore code for change password on user email",
    "name": "Send_restore",
    "group": "Email",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Username or Email</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controllers/users.js",
    "groupTitle": "Email"
  },
  {
    "type": "get",
    "url": "/confirm",
    "title": "Confirm you email in DB by confirm code",
    "name": "Confirm",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirm_code",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/restore",
    "title": "Change your password in DB by a restore code",
    "name": "Restore",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "restore_code",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/update-password",
    "title": "Update password",
    "name": "Update_password",
    "group": "User",
    "permission": [
      {
        "name": "oAuth2"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldPassword",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/upload-profile",
    "title": "Post data for upload profile",
    "name": "Upload_profile",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>require</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/me",
    "title": "Get user info by token value",
    "name": "User_info",
    "group": "User",
    "permission": [
      {
        "name": "oAuth2"
      }
    ],
    "version": "0.0.0",
    "filename": "app/controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Get all users",
    "name": "Users_list",
    "group": "User",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "skip",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "limit",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fields",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controllers/users.js",
    "groupTitle": "User"
  }
] });
