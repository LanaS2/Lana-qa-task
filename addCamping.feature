Feature:Add camping functionality
The user should be able to add camping

Scenario:Verify that we can Add a new camping successfully
  Given the user logged in as an admin user
  When the user navigate to the promotions area
  And the user choose to add a new camping
  And the user fill in the required information for the camping
  And the user save the new camping
  Then the camping should be successfully added
  And the user should see the added camping in the list of campings