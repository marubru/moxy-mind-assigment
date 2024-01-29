Feature: End to end scenario to test successfull and unsuccessfull order

Scenario: Successfull order - User is able to place order
  When I navigate to url
  And I login with "standard_user" and "secret_sauce"
  Then Add "sauce-labs-backpack" item to cart
  And Proceed to cart
  And Cart contains "sauce-labs-backpack" item
  And Proceed to checkout
  And Fill checkout info
  And Finish order
  And Order was completed

Scenario: Unsuccessfull order - Checkout info are not filled correctly
  When I navigate to url
  And I login with "problem_user" and "secret_sauce"
  Then Add "sauce-labs-onesie" item to cart
  And Proceed to cart
  And Cart contains "sauce-labs-onesie" item
  And Proceed to checkout
  And Fill checkout info
  Then Error message is shown