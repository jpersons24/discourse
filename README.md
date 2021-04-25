# Discourse

Discourse is an app where users can chat with strangers they have been paired with. Pairing is based on data gathered upon sign up, ranging across multiple topics from favorite type of cuisine to political stances.

## Installation

Discourse is run with Ruby on Rails backend and React front end. You will need to clone both repositories.

1. `git clone` the [Discourse](https://github.com/jpersons24/discourse) repository to your local machine.
2. You'll then need to `cd discourse-rails`.
3. Once in discourse-rails directory, `git clone` the [discourse-rails](https://github.com/jpersons24/discourse-rails/tree/master)

*Once both repositories are cloned to your macine, you'll need to run the following commands:*
1. From the `discourse-react` directory, run `npm install` from your command line.
2. From the `discourse-rails` directory, run 'rails db:create`, `rails db:migrate`, and `rails db:seed` respectively.


## Usage

To run the app run the following commands

***From discourse-rails directory:***

   `rails s -p 3001`

***From discourse-react directory:***

   `npm start`



## Contributing

Discourse is an open-source project still in active development. 



## License

