pipeline {
  agent any
  stages {
    stage('Init') {
      steps {
        echo 'In Init '
      }
    }
    stage('Checkout') {
      steps {
        echo 'In Checkout'
      }
    }
    stage('Deploy 1') {
      parallel {
        stage('Deploy 1') {
          steps {
            echo 'In Deploy1'
          }
        }
        stage('') {
          steps {
            echo 'test1'
          }
        }
        stage('') {
          steps {
            echo 'test2'
          }
        }
        stage('') {
          steps {
            echo 'test3'
          }
        }
        stage('') {
          steps {
            echo 'test4'
          }
        }
      }
    }
    stage('Deploy2') {
      parallel {
        stage('Deploy2') {
          steps {
            echo 'test1'
          }
        }
        stage('') {
          steps {
            echo 'test2'
          }
        }
        stage('') {
          steps {
            echo 'test3'
          }
        }
        stage('') {
          steps {
            echo 'test4'
          }
        }
        stage('') {
          steps {
            echo 'test4'
          }
        }
      }
    }
  }
}