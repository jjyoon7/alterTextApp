using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Azure.Storage;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using alter_text_app.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Threading.Tasks;
using System.Text;
using System.Linq;
using Microsoft.Extensions.Logging;

namespace alter_text_app.Controllers
{
    public class HomeController : Controller
    {
        private IConfiguration _configuration;

        public HomeController(IConfiguration Configuration)
        {
            _configuration = Configuration;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(List<IFormFile> files)
        {
            string data = System.IO.File.ReadAllText(localFilePath, Encoding.UTF8);

            return Content(data);
        }

        [HttpPost("UploadText")]
        public async Task<IActionResult> Post(List<IFormFile> files)
        {
            if (files != null)
            {
                //try
                //{
                    string connectionString = Environment.GetEnvironmentVariable("AZURE_");

                    // Create a BlobServiceClient object which will be used to create a container client
                    BlobServiceClient blobServiceClient = new BlobServiceClient(connectionString);

                    //Create a unique name for the container
                    string containerName = "textdata" + Guid.NewGuid().ToString();

                    // Create the container and return a container client object
                    BlobContainerClient containerClient = await blobServiceClient.CreateBlobContainerAsync(containerName);


                // Create a local file in the ./data/ directory for uploading and downloading
                string localPath = "./data/";
                string fileName = "textfiledata" + Guid.NewGuid().ToString() + ".txt";
                string localFilePath = Path.Combine(localPath, fileName);

                // Get a reference to a blob
                BlobClient blobClient = containerClient.GetBlobClient(fileName);

                    // Open the file and upload its data
                    using FileStream uploadFileStream = System.IO.File.OpenRead(localFilePath);
                    await blobClient.UploadAsync(uploadFileStream, true);
                    uploadFileStream.Close();

                    string downloadFilePath = localFilePath.Replace(".txt", "DOWNLOAD.txt");

                    // Get the data
                    string data = System.IO.File.ReadAllText(localFilePath, Encoding.UTF8);

                    return Content(data);
                //}
                //catch
                //{
                //    //storageExeption for the error messages
                //}
                //finally
                //{
                //    if (files != null)
                //    {
                //        //files.Close();
                //    }
                //}
            }
            return Ok();
                   

        }

    }
}
