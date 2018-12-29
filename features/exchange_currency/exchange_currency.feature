Feature: Calculate the value of a currency in another currency

  In order to avoid having to remember things that need doing
  As a forgetful person
  I want to be able to record what I need to do in a place where I won't forget about them

  Scenario: Provide the value of a currency exchanged to another currency

    Given Alex open the exchange page
    When he want to exchange 15 USD to EUR
    Then he should receive 13.2 as the exchanged value