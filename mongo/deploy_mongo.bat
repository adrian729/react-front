set MONGO_DATA_DIR=/data/db
set MONGO_LOG_DIR=/dev/null

echo %MONGO_DATA_DIR%
echo %MONGO_LOG_DIR%


docker run -d --name mongodb -e "MONGO_DATA_DIR=%MONGO_LOG_DIR%" -e "MONGO_LOG_DIR=%MONGO_LOG_DIR%" --mount source=data,target=/data/db -p 27017:27017 mongo