name := """play-java"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava)

scalaVersion := "2.11.11"
PlayKeys.externalizeResources := false

libraryDependencies += javaJdbc
libraryDependencies += cache
libraryDependencies += javaWs
libraryDependencies += "org.postgresql" % "postgresql" % "42.2.2"
libraryDependencies += evolutions
libraryDependencies += "org.hibernate" % "hibernate-entitymanager" % "5.1.4.Final"
libraryDependencies += "com.amazonaws" % "aws-java-sdk" % "1.11.52"
libraryDependencies += javaJpa
