// CODE_CHANGES = getGitChanges()
pipeline {
  agent any
  
  stages {
    stage('Build') {
        // when {
        // // run if boolean condition retuns true
        // expression{
        //     CODE_CHANGES == true
        // }
      }
      steps {
        nodejs('node') {
         echo CODE_CHANGES
          sh '''yarn\
             gatsby build'''
        }

      }
    }
    
  }
  // run after stages
  post {
    always {
      //
    }
    success {
      //
    }
    failure {
      //
    }
  
}