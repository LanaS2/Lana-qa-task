Feature:Add affiliates functionality
The user should be able to add affiliates

Scenario:Verify that we can Add a new affiliates successfully
  Given the user logged in as an admin user
  When the user navigate to the promotions area
  And the user choose to add a new affiliate
  And the user fill in the required information for the affiliate
  And the user save the new affiliate
  Then the affiliate should be successfully added
  And the user should see the added affiliate in the list of affiliates
