function login(userNameOrEmail, password, callback) {
    // Send credentials to external database API
    let hashedPassword = hash(password);
  
    let options = {
      url: "https://example.com/api/authenticate",
      body: {
        email: userNameOrEmail,
        password: hashedPassword
      }
    };
  
    send(options, (err, profileData) => {
      // Return error in callback if authentication is unsuccessful
      if (err) {
        return callback(new WrongUsernameOrPasswordError(userNameOrEmail, "My custom error message."));
      } else {
        // Return profile data in callback if authentication is successful
        let profile = {
          username: profileData.username,
          email: profileData.emailAddress
        };
  
        return callback(null, profile);
      }
    });
  }