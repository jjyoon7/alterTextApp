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
using System.Net.Http;

namespace alter_text_app.Controllers
{
    public class HomeController : Controller
    {
        private IConfiguration _configuration;
        //private Stream ms;

        public HomeController(IConfiguration Configuration)
        {
            _configuration = Configuration;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("UploadText")]
        public async Task<IActionResult> Post(List<IFormFile> files)
        {
            if (files != null)
            {
                try
                {
                    //string connectionString = Environment.GetEnvironmentVariable("AZURE_STORAGE_CONNECTION_STRING");

                    //BlobServiceClient blobServiceClient = new BlobServiceClient(connectionString);

                    //string containerName = "text0data" + Guid.NewGuid().ToString();

                    ////if it is a first time POST method has been triggered, create a new container
                    //if (Request.Method != "POST")
                    //{
                       
                    //    BlobContainerClient newContainerClient = await blobServiceClient.CreateBlobContainerAsync(containerName);

                    //}

                    ////if the POST method has already triggered before for the first time, connect with the container that is created.
                    //BlobContainerClient containerClient = await blobServiceClient.GetBlobContainersAsync(containerName); // Q. how to solve the error staying 'containerName' to 'Azure.Storage.Blobs.Models.BlobContainerTraits' error 

                    //string fileName = TextFileUpload.Name; //Q. how to get the chosen file name (use fileStream) and replace with newly assignmed name? Current set up is not working properly.
                    //string localFilePath = Path.GetFileNameWithoutExtension(fileName);

                    //BlobClient blobClient = containerClient.GetBlobClient(fileName);

                    //using FileStream uploadFileStream = System.IO.File.OpenRead(localFilePath);
                    //await blobClient.UploadAsync(uploadFileStream, true);

                    //await blobClient.UploadAsync(ms, new BlobHttpHeaders { ContentType = "text/plain" });
                    //uploadFileStream.Close();

                    //string data = System.IO.File.ReadAllText(localFilePath, Encoding.UTF8);

                    //return Content(data);
                }
                catch (StorageException e)
                {
                    //if (e.RequestInformation.ErrorCode == "BlobNotFound")
                    //    throw new FileNotFoundException();

                    //throw;
                }
                finally
                {
                    //Q. close filestream or clean up? but maybe finally is not necessary?
                }
            }
            return Ok();
                   

        }

    }
}
