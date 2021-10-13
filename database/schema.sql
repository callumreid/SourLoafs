CREATE DATABASE sour_loafs;

CREATE TABLE Loaf_Notes (
loafId MEDIUMINT NOT NULL AUTO_INCREMENT,
stepTwoInput varchar(255),
stepFourInput varchar(255),
stepFiveInput varchar(255),
stepEightInput varchar(255),
stepNineInput varchar(255),
finalNotesInput varchar(510),
PRIMARY KEY (loafId)
);