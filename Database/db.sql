create database MERN_Project;
use MERN_Project;

-- user --
create table users(
email varchar(50) primary key,
password varchar(100) default "sunbeam",
role enum("admin","student") default "student"
);

-- courses --
create table courses(
course_id int primary key auto_increment,
course_name varchar(50),
description varchar(100),
fees int ,
start_date date,
end_date date,
video_expire_days int
);

-- students --
create table students(
reg_no int primary key auto_increment,
name varchar(50),
email varchar(50) not null,
course_id int,
mobile_no int,
profile_pic blob,
foreign key(email) references users(email) on update cascade on delete cascade,
foreign key(course_id) references courses(course_id) on update cascade on delete cascade
);

-- videos --
create table videos(
video_id int primary key auto_increment,
course_id int,
title varchar(50),
description varchar(100),
youtube_url varchar(100),
added_at datetime default current_timestamp,
foreign key(course_id) references courses(course_id) on update cascade on delete cascade
);

drop table users;
drop table students;
drop table courses;
drop table videos;