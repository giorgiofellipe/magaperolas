app.factory 'CustomUser', (ParseDefaultUser) ->	
      class CustomUser extends ParseDefaultUser
        @configure 'users', 'username', 'password', 'liberado'