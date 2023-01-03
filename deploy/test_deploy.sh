# build in local and replace the new build files to the cloud server
# yarn
npm run build
scp  -i "/Users/andreassujono/Desktop/FOLDER/job/andreas-server/server.pem" -r $(pwd)/build ubuntu@ec2-18-141-202-3.ap-southeast-1.compute.amazonaws.com:/home/ubuntu/test/personal-website