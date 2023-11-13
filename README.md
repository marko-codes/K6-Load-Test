# K6-Load-Test
Load, Stress, Spike, Soak Tests written in  K6

API load testing is a type of backend performance testing used to assess an application programming interface's performance under varied load conditions. It is used to determine an API's overall performance as well as its capability of responding to concurrent queries from high numbers of virtual users.

We can save the results in CSV format and then create visuals, and also compare with next iterations of this test.

Command to run: k6 run --out csv=load_test_results.csv load_test.js


# Load Test

First test to get benchmarks of the system.

Load Testing is primarily concerned with assessing the current performance of your system in terms of concurrent users or requests
per second.
When you want to understand if your system is meeting the performance goals, this is the type of test you '11 run.

Run a load test to:
  - Assess the current performance of your system under typical and peak load
  - Make sure you are continuously meeting the performance standards as you make changes to your system

Run on commits to compare the behaviour and the speeds of system with previous benchmarks.
This can be part of CICD pipeline.

# Stress Test

Stress Testing is a type of load testing used to determine the limits of the system.
The purpose of this test is to verify the stability and reliability of the system under extreme conditions

Run a stress test to:
  - Determine how your system will behave under extreme conditions
  - Determine what is the maximum capacity of your system in terms of users or throughput
  - Determine the breaking point of your system and its failure mode
  - Determine if your system will recover without manual intervention after the stress test is over


# Spike Test

Spike test is a variation of a stress test, 
but it does not gradually increase the load, instead it spikes to extreme load over a very short window of time

Run a spike test to:
  - Determine how your system will perform under a sudden surge of traffic
  - Determine if your system will recover once the traffic has subsided

Success is based on expectations. Systems will generally react in 1 of 4 ways:
  - Excellent: system performance is not degraded during the surge of traffic. Response time is similar during low traffic and high traffic
  - Good: Response time is slower, but the system does not produce any errors. All requests are handled
  - Poor: System produces errors during the surge of traffic, but recovers to normal after the traffic subside
  - Bad: System crashes, and does not recover after the traffic has subsided

# Soak Test

Soak testing is used to validate reliability of the system over a long time

Run a soak test to:
  - Verify that your system doesn't suffer from bugs or memory leaks, which result in a crash or restart after
  - Verify that expected application restarts don't lose requests
  - Find bugs related to race-conditions that appear sporadically
  - Make sure your database doesn't exhaust the allotted storage space and stops
  - Make sure your logs don't exhaust the allotted disk storage
  - Make sure the external services you depend on don't stop working after a certain amount of requests are exceeded


How to run a soak test:
  - Determe the maximum amount of users your system can handle
  - Get the 75-80% of that value
  - Set VUs to that value
Run the test in 3 stages. Rump up to the VUs, stay there for 4-12 hours, rump down to 0
