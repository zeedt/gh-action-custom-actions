const core = require('@actions/core')
const github = require('@actions/github')
const exec = require('@actions/exec')

function run() {
    const bucket = core.getInput('bucket', {required: true});
    const bucketRegion = core.getInput('bucket-region', {required: true});
    const distFolder = core.getInput('dist-folder', {required: true})

    core.notice('Bucket is ' + bucket);
    core.notice('Bucket Region is ' + bucketRegion);
    core.notice('Dist FOlder is ' + distFolder);

    // Upload files to S3
    const S3Uri = `s3://${bucket}`
    // exec.exec(`aws s3 async ${distFolder} ${bucket} --region ${bucketRegion}`)

    core.notice('Hello from my Javascript custom action');

    const websiteUrl = `http://${bucket}.s3-website-${bucketRegion}.amazonaws.com`;
    core.setOutput('website-url', websiteUrl);
}

run();