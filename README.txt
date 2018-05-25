#Notes App
A space for your notes :)

** Stack**: React, Express, PostgresSQL, Node

Hi!

Description of Project:

Setup/Installation Instructions:
	-npm install (dependencies are in package.json)
	-command to start server & frontend
		-npm start ( for both)
	### DB setup
		-used PostgreSQL w/ cmd line package
		##Create a database 'notes' with the following tables
				
		User: 
		User_id (INT PRIMARY KEY AUTO_INCREMENT)
		firstName (VARCHAR)
		lastName (VARCHAR)
		Email (VARCHAR)/ OAuth?
		Location (VARCHAR)
		Acct Creation Date? (DATETIME)

		TOPICS/NODES:
		topic_id (INT PRIMARY KEY AUTO_INCREMENT)
		User_id ( FOREIGN KEY)
		Name (VARCHAR)<-from user input
		Location(VARCHAR)????
		Date last modified?(DATETIME)
		Date created (DATETIME)
		Photo_id (FOREIGN KEY)

		Files:
		file_id (INT PRIMARY KEY AUTO_INCREMENT)
		Date last modified?(DATETIME)
		Name (VARCHAR)<-from user input

		PHOTOS:
		photo_id (INT PRIMARY KEY AUTO_INCREMENT)
		REF TO S3 AMAZON			

		Files_Topics:
		ft_id (INT PRIMARY KEY AUTO_INCREMENT)
		topic_id (INT)
		file_id (INT)


### Current Features List:
	-first page- nodes w/pictures & topics title
	-second page- finder-like page for each node/topic
	-third page- file clicked on on page two.
### Later features List:
	-login page
	-further interactivity ( being able to insert a node into another node)
	-instead of api do scraping

### Link to project rules:https://github.com/Techtonica/curriculum/blob/master/projects/final-project/final-project.md 
